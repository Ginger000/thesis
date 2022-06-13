
function DemoCard({buttonName, title, description, img}) {
  return (
    <div className='dropdown-demo'>
        <button className='dropbtn'>{buttonName}</button>
        <div className='dropdown-content'>
          <a href="#">
            <h5 className="demo-title">{title} </h5>
            <p className='preview-text'>{description} </p>
            <img src={img} className='demo-image' alt="" />
          </a>
        </div>
      </div>
  )
}

export default DemoCard