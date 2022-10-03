import {
  ButtonInverted,
  ButtonBase,
  ButtonGoogle,
  LoadingSpinner,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  // eslint-disable-next-line default-case
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.base:
      return ButtonBase;
    case BUTTON_TYPE_CLASSES.google:
      return ButtonGoogle;
    case BUTTON_TYPE_CLASSES.inverted:
      return ButtonInverted;
  }
};

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
