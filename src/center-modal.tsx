import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
import Styles from './styles/center-modal.module.scss';
import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

export interface CenterModalProps extends ModalProps {
  hasX?: boolean;
  large?: boolean;
  modalContainer?: Element;
  onClose: (evt: any) => void;
  open: boolean;
  className?: string;
  renderBody: string | React.ReactNode | (() => React.ReactNode);
  renderFooter?: string | React.ReactNode | (() => React.ReactNode);
  renderHeader?: string | React.ReactNode | (() => React.ReactNode);
  padding?: boolean;
}

const evaluateRenderProp: (
  prop: string | React.ReactNode | (() => React.ReactNode)
) => React.ReactNode = prop => {
  return prop instanceof Function ? prop() : prop;
};

export class CenterModal extends Component<CenterModalProps> {
  public static defaultProps: Partial<CenterModalProps> = {
    bodyNode: document.body,
    hasX: false,
    large: false,
    modalContainer: document.body,
    padding: true,
  };

  public componentWillReceiveProps(nextProps: CenterModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    const {
      hasX,
      large,
      padding,
      modalContainer,
      onClose,
      open,
      renderBody,
      renderFooter,
      renderHeader,
      bodyNode,
      className,
      ...attributes
    } = this.props;
    // Using <> instead of <Fragment> is breaking the linter.
    return ReactDOM.createPortal(
      <Fragment>
        <div
          className={cn(Styles['center-modal'], className, {
            [Styles['is-large']]: large,
            [Styles['is-visible']]: open,
            [Styles['has-padding']]: padding,
          })}
          {...attributes}
        >
          {hasX && (
            <Icon type="x" data-role="close-center-modal" onClick={onClose} />
          )}
          {renderHeader && <h1>{evaluateRenderProp(renderHeader)}</h1>}
          {evaluateRenderProp(renderBody)}
          {renderFooter && (
            <div className={Styles['modal-footer']}>
              {evaluateRenderProp(this.props.renderFooter)}
            </div>
          )}
        </div>
        <div
          className={cn(Styles['modal-mask'], { [Styles['is-visible']]: open })}
          onClick={onClose}
        />
      </Fragment>,
      modalContainer
    );
  }
}

export default CenterModal;
