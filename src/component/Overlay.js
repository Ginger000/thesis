// import './overlay.css'

function Overlay() {
  return (
    <div className='overlay'>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      {/* <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div> */}
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        <button style={{background: 'transparent', border:"none", padding:'1rem', fontSize:'1rem', color:'white'}}>THEORY</button>
        <div style={{position:"absolute", background:'transparent', minWidth:'160px', boxShadow:'0px 8px 16px 0px', zIndex:'1'}}>
          <a href="#" style={{padding:'12px 16px', display:'block', textDecoration:'none'}} >Link 1</a>
          <a href="#" style={{padding:'12px 16px', display:'block', textDecoration:'none'}}>Link 2</a>
          <a href="#" style={{padding:'12px 16px', display:'block', textDecoration:'none'}}>Link 3</a>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>07/02/2022</div>
    </div>
  )
}

export default Overlay