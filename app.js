function MostrarCount(props){
  return (
    <h1 className="
      text-white
      bg-red-500
      w-20 h-20
      flex items-center justify-center
      text-3xl font-bold
      rounded-xl
      shadow-lg
    ">
      {props.count}
    </h1>
  );
}

function CounterAdd(props) {
  return (
    <button
      className="
        text-white
        bg-green-600
        w-16 h-16
        rounded-xl
        text-2xl
        shadow-md
        transition
        hover:scale-110 hover:bg-green-500
        active:scale-95
      "
      onClick={props.onAdd}
    >
      +
    </button>
  );
}

function CounterMenos(props){
  return (
    <button
      className="
        text-white
        bg-blue-600
        w-16 h-16
        rounded-xl
        text-2xl
        shadow-md
        transition
        hover:scale-110 hover:bg-blue-500
        active:scale-95
      "
      onClick={props.onMenos}
    >
      −
    </button>
  );
}

function App(){
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br from-gray-900 to-gray-800
    ">
      <div className="
        bg-gray-800
        p-8
        rounded-2xl
        shadow-2xl
        border border-gray-700
      ">
        <div className="grid grid-cols-3 gap-6 items-center">
          <CounterMenos onMenos={()=>setCount(c => c - 1)} />
          <MostrarCount count={count} />
          <CounterAdd onAdd={()=>setCount(c => c + 1)} />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
