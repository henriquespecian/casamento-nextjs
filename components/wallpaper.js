import { createGlobalStyle } from '@xstyled/styled-components';

const WallpaperStyle = createGlobalStyle`
  body {
    background: url("/image/wallpaper_flower.png") no-repeat center center fixed;
    background-size: cover;
  }
  `;

export default function Wallpaper(){
    return (
        <WallpaperStyle />
    );        
}