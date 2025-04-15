import Sub from './service.png'

export default function ServiceInfo() {
    return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 50 }}>
    <img src={Sub} alt="My Image" style={{ width: 200, height: 200 }}/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <span className='h6'>Balayage Hair Coloring</span>
          <span className="h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </div>
      </div></>

    );
}