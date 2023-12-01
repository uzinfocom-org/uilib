import React from "react";
import Logo, { type OuterLogoProps } from "./Logo";

const Layers: React.FC<OuterLogoProps> = (outer) => {
  return (
    <Logo
      fullColor={
        <svg
          width="146"
          height="48"
          viewBox="0 0 146 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.3399 11.1459 43.5177 14.2142L38.3913 33.3432C37.569 36.4114 34.4151 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15115 41.4472L13.2775 22.3182Z"
            fill="#9E77ED"
          />
          <path
            d="M5.60882 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7822 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7425 26.7465 31.8964 23.6782 32.7187L4.5492 37.8451C1.48093 38.6673 -0.339816 36.8466 0.482448 33.7783L5.60882 14.6493Z"
            fill="#6941C6"
          />
          <path
            d="M61.5241 30.2132H67.7961V33.9092H56.7361V14.2532H61.5241V30.2132Z"
            fill="#101828"
          />
          <path
            d="M68.5678 26.0692C68.5678 24.4638 68.8665 23.0545 69.4638 21.8412C70.0798 20.6278 70.9105 19.6945 71.9558 19.0412C73.0012 18.3878 74.1678 18.0612 75.4558 18.0612C76.5572 18.0612 77.5185 18.2852 78.3398 18.7332C79.1798 19.1812 79.8238 19.7692 80.2718 20.4972V18.2852H85.0598V33.9092H80.2718V31.6972C79.8052 32.4252 79.1518 33.0132 78.3118 33.4612C77.4905 33.9092 76.5292 34.1332 75.4278 34.1332C74.1585 34.1332 73.0012 33.8065 71.9558 33.1532C70.9105 32.4812 70.0798 31.5385 69.4638 30.3252C68.8665 29.0932 68.5678 27.6745 68.5678 26.0692ZM80.2718 26.0972C80.2718 24.9025 79.9358 23.9598 79.2638 23.2692C78.6105 22.5785 77.8078 22.2332 76.8558 22.2332C75.9038 22.2332 75.0918 22.5785 74.4198 23.2692C73.7665 23.9412 73.4398 24.8745 73.4398 26.0692C73.4398 27.2638 73.7665 28.2158 74.4198 28.9252C75.0918 29.6158 75.9038 29.9612 76.8558 29.9612C77.8078 29.9612 78.6105 29.6158 79.2638 28.9252C79.9358 28.2345 80.2718 27.2918 80.2718 26.0972Z"
            fill="#101828"
          />
          <path
            d="M103.924 18.2852L94.1237 41.3292H88.9717L92.5557 33.3772L86.1997 18.2852H91.5477L95.1597 28.0572L98.7437 18.2852H103.924Z"
            fill="#101828"
          />
          <path
            d="M119.823 25.8452C119.823 26.2932 119.795 26.7598 119.739 27.2452H108.903C108.978 28.2158 109.286 28.9625 109.827 29.4852C110.387 29.9892 111.068 30.2412 111.871 30.2412C113.066 30.2412 113.896 29.7372 114.363 28.7292H119.459C119.198 29.7558 118.722 30.6798 118.031 31.5012C117.359 32.3225 116.51 32.9665 115.483 33.4332C114.456 33.8998 113.308 34.1332 112.039 34.1332C110.508 34.1332 109.146 33.8065 107.951 33.1532C106.756 32.4998 105.823 31.5665 105.151 30.3532C104.479 29.1398 104.143 27.7212 104.143 26.0972C104.143 24.4732 104.47 23.0545 105.123 21.8412C105.795 20.6278 106.728 19.6945 107.923 19.0412C109.118 18.3878 110.49 18.0612 112.039 18.0612C113.551 18.0612 114.895 18.3785 116.071 19.0132C117.247 19.6478 118.162 20.5532 118.815 21.7292C119.487 22.9052 119.823 24.2772 119.823 25.8452ZM114.923 24.5852C114.923 23.7638 114.643 23.1105 114.083 22.6252C113.523 22.1398 112.823 21.8972 111.983 21.8972C111.18 21.8972 110.499 22.1305 109.939 22.5972C109.398 23.0638 109.062 23.7265 108.931 24.5852H114.923Z"
            fill="#101828"
          />
          <path
            d="M126.577 20.8892C127.137 20.0305 127.837 19.3585 128.677 18.8732C129.517 18.3692 130.45 18.1172 131.477 18.1172V23.1852H130.161C128.966 23.1852 128.07 23.4465 127.473 23.9692C126.876 24.4732 126.577 25.3692 126.577 26.6572V33.9092H121.789V18.2852H126.577V20.8892Z"
            fill="#101828"
          />
          <path
            d="M139.562 34.1332C138.199 34.1332 136.986 33.8998 135.922 33.4332C134.858 32.9665 134.018 32.3318 133.402 31.5292C132.786 30.7078 132.44 29.7932 132.366 28.7852H137.098C137.154 29.3265 137.406 29.7652 137.854 30.1012C138.302 30.4372 138.852 30.6052 139.506 30.6052C140.103 30.6052 140.56 30.4932 140.878 30.2692C141.214 30.0265 141.382 29.7185 141.382 29.3452C141.382 28.8972 141.148 28.5705 140.682 28.3652C140.215 28.1412 139.459 27.8985 138.414 27.6372C137.294 27.3758 136.36 27.1052 135.614 26.8252C134.867 26.5265 134.223 26.0692 133.682 25.4532C133.14 24.8185 132.87 23.9692 132.87 22.9052C132.87 22.0092 133.112 21.1972 133.598 20.4692C134.102 19.7225 134.83 19.1345 135.782 18.7052C136.752 18.2758 137.9 18.0612 139.226 18.0612C141.186 18.0612 142.726 18.5465 143.846 19.5172C144.984 20.4878 145.638 21.7758 145.806 23.3812H141.382C141.307 22.8398 141.064 22.4105 140.654 22.0932C140.262 21.7758 139.739 21.6172 139.086 21.6172C138.526 21.6172 138.096 21.7292 137.798 21.9532C137.499 22.1585 137.35 22.4478 137.35 22.8212C137.35 23.2692 137.583 23.6052 138.05 23.8292C138.535 24.0532 139.282 24.2772 140.29 24.5012C141.447 24.7998 142.39 25.0985 143.118 25.3972C143.846 25.6772 144.48 26.1438 145.022 26.7972C145.582 27.4318 145.871 28.2905 145.89 29.3732C145.89 30.2878 145.628 31.1092 145.106 31.8372C144.602 32.5465 143.864 33.1065 142.894 33.5172C141.942 33.9278 140.831 34.1332 139.562 34.1332Z"
            fill="#101828"
          />
        </svg>
      }
      fullWhite={
        <svg
          width="146"
          height="48"
          viewBox="0 0 146 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.84">
            <path
              opacity="0.7"
              d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.3399 11.1459 43.5177 14.2142L38.3913 33.3432C37.569 36.4114 34.4151 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15115 41.4472L13.2775 22.3182Z"
              fill="white"
            />
            <path
              d="M5.60882 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7822 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7425 26.7465 31.8964 23.6782 32.7187L4.5492 37.8451C1.48093 38.6673 -0.339816 36.8466 0.482448 33.7783L5.60882 14.6493Z"
              fill="white"
            />
            <path
              d="M61.5241 30.2132H67.7961V33.9092H56.7361V14.2532H61.5241V30.2132Z"
              fill="white"
            />
            <path
              d="M68.5678 26.0692C68.5678 24.4638 68.8665 23.0545 69.4638 21.8412C70.0798 20.6278 70.9105 19.6945 71.9558 19.0412C73.0012 18.3878 74.1678 18.0612 75.4558 18.0612C76.5572 18.0612 77.5185 18.2852 78.3398 18.7332C79.1798 19.1812 79.8238 19.7692 80.2718 20.4972V18.2852H85.0598V33.9092H80.2718V31.6972C79.8052 32.4252 79.1518 33.0132 78.3118 33.4612C77.4905 33.9092 76.5292 34.1332 75.4278 34.1332C74.1585 34.1332 73.0012 33.8065 71.9558 33.1532C70.9105 32.4812 70.0798 31.5385 69.4638 30.3252C68.8665 29.0932 68.5678 27.6745 68.5678 26.0692ZM80.2718 26.0972C80.2718 24.9025 79.9358 23.9598 79.2638 23.2692C78.6105 22.5785 77.8078 22.2332 76.8558 22.2332C75.9038 22.2332 75.0918 22.5785 74.4198 23.2692C73.7665 23.9412 73.4398 24.8745 73.4398 26.0692C73.4398 27.2638 73.7665 28.2158 74.4198 28.9252C75.0918 29.6158 75.9038 29.9612 76.8558 29.9612C77.8078 29.9612 78.6105 29.6158 79.2638 28.9252C79.9358 28.2345 80.2718 27.2918 80.2718 26.0972Z"
              fill="white"
            />
            <path
              d="M103.924 18.2852L94.1237 41.3292H88.9717L92.5557 33.3772L86.1997 18.2852H91.5477L95.1597 28.0572L98.7437 18.2852H103.924Z"
              fill="white"
            />
            <path
              d="M119.823 25.8452C119.823 26.2932 119.795 26.7598 119.739 27.2452H108.903C108.978 28.2158 109.286 28.9625 109.827 29.4852C110.387 29.9892 111.068 30.2412 111.871 30.2412C113.066 30.2412 113.896 29.7372 114.363 28.7292H119.459C119.198 29.7558 118.722 30.6798 118.031 31.5012C117.359 32.3225 116.51 32.9665 115.483 33.4332C114.456 33.8998 113.308 34.1332 112.039 34.1332C110.508 34.1332 109.146 33.8065 107.951 33.1532C106.756 32.4998 105.823 31.5665 105.151 30.3532C104.479 29.1398 104.143 27.7212 104.143 26.0972C104.143 24.4732 104.47 23.0545 105.123 21.8412C105.795 20.6278 106.728 19.6945 107.923 19.0412C109.118 18.3878 110.49 18.0612 112.039 18.0612C113.551 18.0612 114.895 18.3785 116.071 19.0132C117.247 19.6478 118.162 20.5532 118.815 21.7292C119.487 22.9052 119.823 24.2772 119.823 25.8452ZM114.923 24.5852C114.923 23.7638 114.643 23.1105 114.083 22.6252C113.523 22.1398 112.823 21.8972 111.983 21.8972C111.18 21.8972 110.499 22.1305 109.939 22.5972C109.398 23.0638 109.062 23.7265 108.931 24.5852H114.923Z"
              fill="white"
            />
            <path
              d="M126.577 20.8892C127.137 20.0305 127.837 19.3585 128.677 18.8732C129.517 18.3692 130.45 18.1172 131.477 18.1172V23.1852H130.161C128.966 23.1852 128.07 23.4465 127.473 23.9692C126.876 24.4732 126.577 25.3692 126.577 26.6572V33.9092H121.789V18.2852H126.577V20.8892Z"
              fill="white"
            />
            <path
              d="M139.562 34.1332C138.199 34.1332 136.986 33.8998 135.922 33.4332C134.858 32.9665 134.018 32.3318 133.402 31.5292C132.786 30.7078 132.44 29.7932 132.366 28.7852H137.098C137.154 29.3265 137.406 29.7652 137.854 30.1012C138.302 30.4372 138.852 30.6052 139.506 30.6052C140.103 30.6052 140.56 30.4932 140.878 30.2692C141.214 30.0265 141.382 29.7185 141.382 29.3452C141.382 28.8972 141.148 28.5705 140.682 28.3652C140.215 28.1412 139.459 27.8985 138.414 27.6372C137.294 27.3758 136.36 27.1052 135.614 26.8252C134.867 26.5265 134.223 26.0692 133.682 25.4532C133.14 24.8185 132.87 23.9692 132.87 22.9052C132.87 22.0092 133.112 21.1972 133.598 20.4692C134.102 19.7225 134.83 19.1345 135.782 18.7052C136.752 18.2758 137.9 18.0612 139.226 18.0612C141.186 18.0612 142.726 18.5465 143.846 19.5172C144.984 20.4878 145.638 21.7758 145.806 23.3812H141.382C141.307 22.8398 141.064 22.4105 140.654 22.0932C140.262 21.7758 139.739 21.6172 139.086 21.6172C138.526 21.6172 138.096 21.7292 137.798 21.9532C137.499 22.1585 137.35 22.4478 137.35 22.8212C137.35 23.2692 137.583 23.6052 138.05 23.8292C138.535 24.0532 139.282 24.2772 140.29 24.5012C141.447 24.7998 142.39 25.0985 143.118 25.3972C143.846 25.6772 144.48 26.1438 145.022 26.7972C145.582 27.4318 145.871 28.2905 145.89 29.3732C145.89 30.2878 145.628 31.1092 145.106 31.8372C144.602 32.5465 143.864 33.1065 142.894 33.5172C141.942 33.9278 140.831 34.1332 139.562 34.1332Z"
              fill="white"
            />
          </g>
        </svg>
      }
      shortColor={
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.34 11.1459 43.5177 14.2142L38.3913 33.3432C37.5691 36.4114 34.4152 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15114 41.4472L13.2775 22.3182Z"
            fill="#9E77ED"
          />
          <path
            d="M5.60881 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7823 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7426 26.7465 31.8965 23.6782 32.7187L4.5492 37.8451C1.48093 38.6674 -0.339827 36.8466 0.482438 33.7783L5.60881 14.6493Z"
            fill="#6941C6"
          />
        </svg>
      }
      shortWhite={
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.84">
            <path
              opacity="0.7"
              d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.34 11.1459 43.5177 14.2142L38.3913 33.3432C37.5691 36.4114 34.4152 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15114 41.4472L13.2775 22.3182Z"
              fill="white"
            />
            <path
              d="M5.60881 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7823 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7426 26.7465 31.8965 23.6782 32.7187L4.5492 37.8451C1.48093 38.6674 -0.339827 36.8466 0.482438 33.7783L5.60881 14.6493Z"
              fill="white"
            />
          </g>
        </svg>
      }
      outer={outer}
    />
  );
};

export default Layers;