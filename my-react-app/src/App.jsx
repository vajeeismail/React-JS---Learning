//06. Render List
import List from './List.jsx';

function App() {

  const fruits = [{id: 1, name:"apple", calories: 105},
                  {id: 2, name:"orange", calories: 90},
                  {id: 3, name:"banana", calories: 110},
                  {id: 4, name:"watermelon", calories: 150}];

  const milkShake =[{id: 1, name:"apple milk shake", calories: 155},
                    {id: 2, name:"orange milk shake", calories: 140},
                    {id: 3, name:"banana milk shake", calories: 160},
                    {id: 4, name:"watermelon milk shake", calories: 200}];

  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={milkShake} category="Milk Shakes"/>

      <br /><br />
      <p>Using JavaScript <b>lenght</b> Property Methods</p>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {milkShake.length > 0 ? <List items={milkShake} category="Milk Shakes"/> : null}
    </>
  );
}

export default App
