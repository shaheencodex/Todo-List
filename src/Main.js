import ItemList from "./ItemList";

const Main = ({items, handleChange, handleDelete}) => {
  
        return(
        <main>
          {items.length ? (
             <ItemList 
             items={items}
             handleChange={handleChange}
             handleDelete={handleDelete} />
          ) : (<p style={{ marginTop:'2rem'}}>Your list is empty</p>)}
        

      </main>
    )
}

export default Main ;