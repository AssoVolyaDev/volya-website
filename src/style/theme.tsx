import * as Constants from '../constants';

export interface Theme {
  backgroundColor: string,
  deviceSizes: {
    mobileXS: string
    mobile: string
    mobileXL: string
    tablet: string
    laptop: string
    desktop: string
  }
}

export const theme: Theme = {
  backgroundColor: 'grey',
  deviceSizes: {
    mobileXS: Constants.DEVICE_SIZES.mobileXS + 'px',
    mobile: Constants.DEVICE_SIZES.mobile + 'px',
    mobileXL: Constants.DEVICE_SIZES.mobileXL + 'px',
    tablet: Constants.DEVICE_SIZES.tablet + 'px',
    laptop: Constants.DEVICE_SIZES.laptop + 'px',
    desktop: Constants.DEVICE_SIZES.desktop + 'px',
  },
}
