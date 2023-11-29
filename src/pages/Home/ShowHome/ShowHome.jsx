
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ShowHome() {
  return (
    <div>
        <h2 className='text-3xl text-center font-extrabold'>Lovely Home Photos section</h2>
   <div className='flex justify-center items-center my-5'>
    
     <ImageList sx={{ width: 500, height: 450  }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
   </div>
   </div>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/ngzNqcd/h1.webp',
    title: 'Breakfast',
  },
  {
    img: 'https://i.ibb.co/2W8nyN4/h2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.ibb.co/dJ5Mzdt/h3.webp',
    title: 'Camera',
  },
  {
    img: 'https://i.ibb.co/s16TpBf/h4.webp',
    title: 'Coffee',
  },
  {
    img: 'https://i.ibb.co/9w3SFjw/h5.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.ibb.co/DMmmrcF/h5.webp',
    title: 'Honey',
  },
  {
    img: 'https://i.ibb.co/N1W6Zmr/h6.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://i.ibb.co/f2mJtTR/h7.jpg',
    title: 'Fern',
  },
  {
    img: 'https://i.ibb.co/BKNCn2Z/h8.webp',
    title: 'Mushrooms',
  },
  {
    img: 'https://i.ibb.co/SRBMQ59/h9.webp',
    title: 'Tomato basil',
  },
  {
    img: 'https://i.ibb.co/3R3Lm3w/h10.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://i.ibb.co/bsGqmCP/h11.jpg',
    title: 'Bike',
  },
];