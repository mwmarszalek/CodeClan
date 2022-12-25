const SpeciesItem = ({index,species,characters}) => {
    return <option value={species}>{species}</option>
}

export default SpeciesItem;


    // function MyList(props) {
    //     const items = props.items;
      
    //     // Filter out duplicate items
    //     const uniqueItems = items.filter((item, index, self) => self.indexOf(item) === index);
      
    //     return (
    //       <ul>
    //         {uniqueItems.map((item) => (
    //           <li key={item}>{item}</li>
    //         ))}
    //       </ul>
    //     );
    //   }
