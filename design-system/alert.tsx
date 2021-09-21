import { CSS, css, styled } from '../stitches.config'

const reset: CSS = {
  include: ['box'],
}

const base: CSS = {
  border: '1px solid',
  borderRadius: '$2',
}

const sizes = {
  '1': {
    p: '$3',
  },
}

const colors = {
  gray: {
    backgroundColor: '$slate2',
    borderColor: '$slate6',
  },
  // Important
  blue: {
    backgroundColor: '$blue2',
    borderColor: '$blue6',
  },
  // Secure
  green: {
    backgroundColor: '$green2',
    borderColor: '$green6',
  },
  // Danger
  red: {
    backgroundColor: '$red2',
    borderColor: '$red6',
  },
  loContrast: {
    backgroundColor: '$loContrast',
    borderColor: '$slate6',
  },
  transparentWhite: {
    backgroundColor: 'hsla(0,100%,100%,.2)',
    color: 'white',
    '@hover': {
      '&:hover': {
        backgroundColor: 'hsla(0,100%,100%,.25)',
      },
    },
    '&:active': {
      backgroundColor: 'hsla(0,100%,100%,.3)',
    },
    '&:focus': {
      boxShadow:
        'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
    },
  },
  transparentBlack: {
    backgroundColor: 'hsla(0,0%,0%,.2)',
    color: 'black',
    '@hover': {
      '&:hover': {
        backgroundColor: 'hsla(0,0%,0%,.25)',
      },
    },
    '&:active': {
      backgroundColor: 'hsla(0,0%,0%,.3)',
    },
    '&:focus': {
      boxShadow:
        'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
    },
  },
}

const defaultVariants = {
  size: '1',
  variant: 'gray',
}

const styles: CSS = {
  ...reset,
  ...base,

  variants: {
    size: sizes,
    color: colors,
  },

  defaultVariants,
}

export const alert = css(styles)
export const Alert = styled('div')
