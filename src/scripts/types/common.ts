export enum fileTypes {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  OTHER = 'OTHER',
};
export type fileProcessingStatus = 'PROCESSING' | 'FAILED' | 'PROCESSED';

export interface File {
  bytes?: number,
  createdAt?: Date,
  duration?: number,
  filename?: string,
  height?: number,
  id: string,
  publicId?: string,
  secureUrl: string,
  thumbnailUrl?: string,
  type: fileTypes,
  url?: string,
  width?: number,
  processingStatus?: fileProcessingStatus,
};

export interface TooltipType {
  className?: string,
  customTooltip?: React.ReactNode,
  id: string,
  place?: 'top' | 'right' | 'bottom' | 'left',
  tooltipMsg?: string,
  tooltipText?: string,
}

export interface AvatarType {
  size: string,
  src?: string,
  style?: object,
  icon?: JSX.Element,
  letters?: string,
  letterStyles?: object,
}

export interface DropDownMenuItemType {
  className?: string,
  children?: React.ReactNode,
  actionElement?: React.ReactNode,
  icon?: JSX.Element,
  tooltipData?: TooltipType,
  onClick?: () => void,
}

export interface TextSymbolType {
  className?: string,
  textData?: TextType,
  width?: string | number,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  additionalComponent?: JSX.Element,
  avaData?: AvatarType,
}

// _________DROPDOWN_________

type dropDownPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface DropdownItem {
  id: string | number,
  link?: string,
  linkData?: object,
  innerLink?: string,
  textData: TextSymbolType,
  wrap?: JSX.Element,
}

export interface DropdownType {
  position?: dropDownPosition,
  selfClose?: boolean,
  autoHeight?: boolean,
  anchor?: JSX.Element,
  content?: JSX.Element,
  list: Array<DropDownMenuItemType & DropdownItem>,
}

// __________________

// _________BUTTON_________

export type buttonColor = 'primary' | 'normal' | 'secondary';
export type buttonTheme = 'light' | 'dark';
export type buttonSize = 'sm' | 'md' | 'lg';
export type buttonMainColor = 'base' | 'vividRed';
export type buttonWidth = 'full';

export interface ButtonType {
  className?: string,
  color?: buttonColor,
  msg?: string,
  msgValues?: any,
  text?: string,
  width?: buttonWidth,
  type?: 'button' | 'submit',
  theme?: buttonTheme,
  size?: buttonSize,
  mainColor?: buttonMainColor,
  icon?: JSX.Element,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  loading?: boolean,
  disabled?: boolean,
  style?: object,
  onClick?: () => void,
}

// __________________

// _________TEXT_________

type textAlign = 'center' | 'left' | 'right';
type textColor = 'base' | 'grayDog' | 'red' | 'white';
type textSize = 'xs' | 'sm' | number;
type textWeight = '300' | '500' | '700';
type textDisplay = 'inline-block' | 'inline';
type textTransform = 'uppercase' | 'capitalize' | 'lineTrough' | 'capitalizeFirstLetter';

export interface TextType {
  align?: textAlign,
  color?: textColor,
  display?: textDisplay,
  size?: textSize,
  weight?: textWeight,
  transform?: textTransform,
  msg?: string,
  text?: string | number,
  tag?: keyof JSX.IntrinsicElements,
  values?: object,
  style?: object,
  overflow?: boolean,
  className?: string,
}

// __________________

// _________TEXT_BUTTON_________

type textButtonColor = 'primary' | 'normal' | 'secondary';
type textButtonTheme = 'light' | 'dark';
type textButtonSize = 'sm' | 'md' | 'lg';

export interface TextButtonType {
  color?: textButtonColor,
  msg?: string,
  msgValues?: any,
  text?: string,
  theme?: textButtonTheme,
  size?: textButtonSize,
  icon?: JSX.Element,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  loading?: boolean,
  disabled?: boolean,
  onClick?: () => void,
}
// __________________


// _________INPUT_________

export type inputCallback = ({ }) => void;


export interface InputProps {
  autoSave?: boolean,
  autoFocus?: boolean,
  className?: string,
  defaultValue?: string,
  disabled?: boolean,
  error?: boolean,
  multiple?: boolean,
  name?: string,
  tabIndex?: number,
  type?: string,
  placeholder?: string,
  placeholderMsg?: string,
  placeholderValues?: any,
  style?: object,
  value?: string,
  onChange?: inputCallback,
  onBlur?: inputCallback,
  onFocus?: inputCallback,
}
// __________________


// _________SELECT_________


export interface SingleValueType {
  data: TextSymbolType & {
    text?: string,
    msg?: string,
  }
}

export interface OptionType {
  innerProps?: object,
  data: DropDownMenuItemType & {
    element?: JSX.Element,
    elementStyle?: string,
    value?: any,
  },
  isSelected?: boolean,
}

// __________________


// _________DATE_________

export interface DateItemType {
  defaultDate?: Date,
  value?: Date,
  name: string,
  error: boolean,
  disabled?: boolean,
  onChange?: ({ }) => void,
}

// __________________


// _________NUMBER_________

export interface NumberType {
  value: number,
  name: string,
  onChange: ({ }) => void,
}

// __________________


// _________FIELD_________

export interface FieldType {
  disabled?: boolean,
  required?: boolean,
  name: string,
  title?: string,
  titleTooltip?: string,
  element?: 'input' | 'password' | 'select' | 'date' | 'number',
  linkWrap?: JSX.Element,
  linkData?: TextButtonType,
  error?: string | boolean,
  errorData?: TextType,
}
// __________________


// _________ICON_MENU_________
export interface IconMenuType {
  textBtnData?: TextButtonType,
  btnData?: ButtonType,
  dropDownData?: DropdownType,
}
// __________________