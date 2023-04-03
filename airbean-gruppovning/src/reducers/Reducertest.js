// Här är vår redux store, här lägger vi till ordrar (beställningar), och tar emot order nummer.
const initialState = {
    order: [],
    orderNr: ''
}

// Här skapar vi en variabel som vi döper till reducer, och här lägger vi in vår redux store
// och lägger till en beskrivning på vår action för hur vi vill uppdatera / hämta vårat state.
const reducer = (state = initialState, action) => {
    switch (action.type) {

        // Här skapar vi en variabel som vi lägger till en ny beställning i vår redux store
        // med hjälp av concat som lägger ihop befintlig order array med ny beställning (totalOrder).
        case 'ADD_PRODUCT':
            const addOrder = state.order.concat(action.payload);   

            return{
                ...state,
                order: addOrder
            }
        
        // Här tömmer vi vår order för att nollställa vår redux store.
        case 'RESET':
            return{
                ...state,
                order: state.order = []  
            }

        // Här hämtar vi enbart ordernummer från POST - fetchen. För att få ut eta i Status.
        case 'UPDATE_TIME':
            return{
                ...state,
                orderNr: action.payload
            }
       
        // Här hämtar vi order.id för att nå id:et för kaffet vi vill ta bort från vår order.
        // Vi använder findIndex för att loopa igenom order för att se om det är samma som order.id
        // newCart skapar en ny array som vi lägger in befintlig order array och 
        // i den nya arraten så splicear (tar bort) och 1 står för antal som tas bort.
        case 'DECREASE':
            const removedCoffeId = state.order.findIndex((order)=> order.id === action.payload)
            const newCart = [...state.order];
            newCart.splice(removedCoffeId, 1)

            return{
                ...state,
                order: newCart
            }

            default:
                return state
            }
        }

export default reducer