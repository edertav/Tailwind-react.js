/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image' :"url(https://www.comunidadedasnacoes.com.br/wp-content/uploads/2022/04/batman.png)",
        'img-banner-1' :"url(https://w0.peakpx.com/wallpaper/232/429/HD-wallpaper-the-batman-robert-pattinson.jpg)",
        'custo-banner-2' :"url(https://1.bp.blogspot.com/-FLrgkfAeyz8/XwLTynRgfOI/AAAAAAAAuBE/Fl9s8Q5T0QQ7uir0fpNbXAqg9faklLszQCLcBGAsYHQ/s1600/catwomanzoe002.jpg)",
        'custom-banner-3' :"url(https://preview.redd.it/opinions-on-jeffrey-wrights-gordon-v0-l617izc155sb1.png?auto=webp&s=d86970095d58cf4443cf974ced11c68dd31e93bf)",
      },
      height: {
        '600px': '600px',
        '60px' : '60px'
      },
      width: {
        '200px' : '200px',
      },
      padding: {
        '8px' : '8px',
        '10px' : '10px',
      },
      colors: {
        aliceblue:'#F0F8FF',
        customRed: '#D21617',
      },
      fontSize: {
        'custom-19': '19px',
        '18px': '18px',
        '17px' :'17px',
      },
      transitionDuration: {
        '500': '500ms',
        '800' : '800ms',
      },
      fontFamily: {
        'Kdam' :['Kdam Thmor Pro', 'sans-serif'],
      },
      gridRowGap: {
        '20px': '20px',
      },
      gridColumnGap: {
        '40' : '40px',
      },
      borderRadius: {
        '5px' : '5px'
      },
      backgroundPosition: {
        '50/50': '50% 50%',
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

