function Card(props) {
  const { title, link, loaded, desc } = props
  // const [imgUrl, setImgUrl] = useState("https://picsum.photos/200");

  // const changeImage = () => {
  //   // adding ?random makes sure the image changes each click
  //   setImgUrl(`https://picsum.photos/200?random=${Math.random()}`);
  // };

  return <div id="body">
    <div id="card">
      <h1>{title}</h1>
      <img src={link} alt={loaded} />
      <p>{desc}</p>
      <div id="button-div">
        <button id="button" >Read More</button>
      </div>
    </div>
  </div>

}
export default Card