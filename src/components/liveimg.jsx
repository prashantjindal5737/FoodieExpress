import Carousel from 'react-bootstrap/Carousel';

const UncontrolledExample = () => (
  <Carousel>
    <Carousel.Item><div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',background:'#ff4e50'}}><h1 style={{color:'white'}}>KHANA KHALO</h1></div></Carousel.Item>
    <Carousel.Item><div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',background:'#ff914d'}}><h1 style={{color:'white'}}>VEG</h1></div></Carousel.Item>
    <Carousel.Item><div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',background:'#ff4e50'}}><h1 style={{color:'white'}}>NON‑VEG</h1></div></Carousel.Item>
  </Carousel>
);

export default UncontrolledExample;
