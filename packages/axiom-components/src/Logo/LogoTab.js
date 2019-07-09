import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from './Logo';

export default class LogoTab extends Component {
  static propTypes = {
    /** Color of the Logo background */
    color: PropTypes.oneOf(['grey', 'white']),
    /** Height of the Logo, higher precedence than width */
    height: PropTypes.string,
    /** Width of the Logo, lower precedence than height */
    width: PropTypes.string,
  };

  static defaultProps = {
    color: 'grey',
  };

  render() {
    const viewBoxWidth = 100;
    const viewBoxHeight = 124;
    const { color, ...rest } = this.props;
    const colorMap = {
      grey: '#F3F3F3',
      white: '#FFFFFF',
    };

    /* eslint-disable max-len, react/jsx-sort-props */
    return (
      <Logo { ...rest } viewBoxHeight={ viewBoxHeight } viewBoxWidth={ viewBoxWidth }>
        <svg
            height="100%"
            viewBox={ `0 0 ${viewBoxWidth} ${viewBoxHeight}` }
            width="100%"
            x="0%"
            y="0%">
          <polygon fill={ colorMap[color] } points="0 124 100 124 100 0 0 0"></polygon>
          <g>
            <path className="cls-2" d="M61.582,105.129a.847.847,0,0,1,.342-.578,1.8,1.8,0,0,1,1.137-.324,1.735,1.735,0,0,1,1.161.336,1.11,1.11,0,0,1,.35.892v.468H63.191a3.948,3.948,0,0,0-2.359.526,2.341,2.341,0,0,0-.955,1.972c0,1.507,1.173,2.481,2.987,2.481a2.957,2.957,0,0,0,1.962-.711l.037.583H66v-5.308a2.472,2.472,0,0,0-.852-2,3.15,3.15,0,0,0-2.087-.674,3.108,3.108,0,0,0-2.063.672,2.117,2.117,0,0,0-.8,1.547Zm2.989,2.8a1.539,1.539,0,0,1-1.707,1.538c-1.407,0-1.559-.718-1.559-1.027a.964.964,0,0,1,.4-.837,2.819,2.819,0,0,1,1.505-.242h1.359Z"/>
            <path className="cls-2" d="M28.762,105.129a.847.847,0,0,1,.342-.578,1.8,1.8,0,0,1,1.137-.324,1.735,1.735,0,0,1,1.161.336,1.11,1.11,0,0,1,.35.892v.468H30.371a3.948,3.948,0,0,0-2.359.526,2.341,2.341,0,0,0-.955,1.972c0,1.507,1.173,2.481,2.987,2.481a2.957,2.957,0,0,0,1.962-.711l.037.583h1.136v-5.308a2.472,2.472,0,0,0-.852-2,3.15,3.15,0,0,0-2.087-.674,3.108,3.108,0,0,0-2.063.672,2.117,2.117,0,0,0-.8,1.547Zm2.989,2.8a1.539,1.539,0,0,1-1.707,1.538c-1.407,0-1.559-.718-1.559-1.027a.964.964,0,0,1,.4-.837,2.819,2.819,0,0,1,1.5-.242h1.359Z"/>
            <path className="cls-2" d="M46.738,100.088l-.005,3.3a2.277,2.277,0,0,0-1.586-.6h-.023a2.935,2.935,0,0,0-2.422,1.138,4.431,4.431,0,0,0-.848,2.88,4.625,4.625,0,0,0,.848,2.954,2.949,2.949,0,0,0,2.425,1.138h.019a2.669,2.669,0,0,0,1.843-.794l.042.667h1.136V100.087Zm.218,6.722a3.484,3.484,0,0,1-.469,2.033,1.542,1.542,0,0,1-1.348.622h0a1.54,1.54,0,0,1-1.347-.622,3.47,3.47,0,0,1-.507-2.033,3.227,3.227,0,0,1,.507-1.959,1.775,1.775,0,0,1,2.7,0A3.24,3.24,0,0,1,46.956,106.81Z"/>
            <path className="cls-2" d="M76.769,108.063a1.309,1.309,0,0,1-.434,1,1.823,1.823,0,0,1-1.195.4,1.55,1.55,0,0,1-1.356-.622,4.179,4.179,0,0,1,0-3.992,1.551,1.551,0,0,1,1.357-.623,1.822,1.822,0,0,1,1.195.4,1.271,1.271,0,0,1,.434.98l1.392-.071a2.588,2.588,0,0,0-.894-2.005,3.2,3.2,0,0,0-2.126-.744,2.953,2.953,0,0,0-2.445,1.14,5.445,5.445,0,0,0,0,5.835,2.953,2.953,0,0,0,2.444,1.139,3.2,3.2,0,0,0,2.126-.743,2.61,2.61,0,0,0,.894-2.021Z"/>
            <path className="cls-2" d="M70.725,109.4a.73.73,0,0,1-.912-.015.977.977,0,0,1-.383-.839v-4.183h1.388v-1.441H69.429v-1.488H67.992v1.486h-.836v1.442h.837v4.181a2.313,2.313,0,0,0,1.207,2.193,2.212,2.212,0,0,0,.969.222,2.135,2.135,0,0,0,1.363-.478l.048-.04-.8-1.082Z"/>
            <polygon className="cls-2" points="56.534 108.318 54.992 102.919 53.665 102.919 52.123 108.318 50.581 102.919 49.215 102.919 51.459 110.775 52.787 110.775 54.329 105.376 55.871 110.775 57.198 110.775 59.442 102.919 58.076 102.919 56.534 108.318"/>
            <path className="cls-2" d="M20.3,105.46a2.23,2.23,0,0,0,.27-.295,2.733,2.733,0,0,0,.529-1.7,2.614,2.614,0,0,0-.955-2.162,4.01,4.01,0,0,0-2.546-.715H14.674v10.189h3.458a3.541,3.541,0,0,0,2.446-.811,2.873,2.873,0,0,0,.931-2.242,2.649,2.649,0,0,0-.713-1.82A2.936,2.936,0,0,0,20.3,105.46Zm-.685,3.442a2.145,2.145,0,0,1-1.446.437H16.1v-3.055H18.3a2,2,0,0,1,1.34.441,1.26,1.26,0,0,1,.447,1.008A1.455,1.455,0,0,1,19.615,108.9Zm.051-5.465a1.222,1.222,0,0,1-.411,1.046,2.56,2.56,0,0,1-1.533.366H16.1v-2.83h1.568C19.666,102.045,19.666,103.021,19.666,103.437Z"/>
            <path className="cls-2" d="M37.631,102.791c-1.861,0-2.972,1.2-2.972,3.2v4.778h1.429v-4.789a1.557,1.557,0,1,1,3.088,0v4.79H40.6V106C40.6,103.989,39.491,102.791,37.631,102.791Z"/>
            <path className="cls-2" d="M82.527,102.791a2.629,2.629,0,0,0-1.742.585V100.1H79.356v10.674h1.429v-4.757a1.662,1.662,0,0,1,1.641-1.79,1.559,1.559,0,0,1,1.466,1.735v4.81h1.434V106.1C85.326,102.95,83,102.791,82.527,102.791Z"/>
            <path className="cls-2" d="M25.756,102.791c-1.861,0-2.973,1.2-2.973,3.2v4.778h1.43v-4.789a1.544,1.544,0,0,1,1.544-1.758,1.868,1.868,0,0,1,.526.074l.372-1.4A3.842,3.842,0,0,0,25.756,102.791Z"/>
            <path className="Anon-3" d="M21.739,44.234V60.8l19.289,9.133L60.754,49.1,47.82,25.446a6.823,6.823,0,0,0-1.213.548L25.132,38.369A6.769,6.769,0,0,0,21.739,44.234Z"/>
            <polygon className="Anon-2" points="41.028 69.935 64.285 80.947 74.84 74.865 60.754 49.101 41.028 69.935"/>
            <path className="Anon-5" d="M72.31,36.9l-18.917-10.9a6.8,6.8,0,0,0-5.573-.548L60.754,49.1Z"/>
            <path className="Anon-4" d="M74.84,74.865l.028-.017a6.767,6.767,0,0,0,3.393-5.865V44.234a6.769,6.769,0,0,0-3.393-5.865L72.31,36.9,60.754,49.1Z"/>
            <path className="Anon-12102" d="M21.739,60.8v8.181a6.767,6.767,0,0,0,3.393,5.865l7.275,4.192,8.621-9.105Z"/>
            <path className="cls-3" d="M32.407,79.04l14.2,8.183a6.8,6.8,0,0,0,6.786,0l10.892-6.276L41.028,69.935Z"/>
          </g>
        </svg>
      </Logo>
    );
    /* eslint-enable max-len, react/jsx-sort-props */
  }
}