import { CSS, css, styled } from 'stitches.config'

const styles: CSS = {
  // Reset
  include: ['box'],
}

export const box = css(styles)

export const Box = styled('div', box)
