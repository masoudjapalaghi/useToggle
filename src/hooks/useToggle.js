// Parameter is the boolean, with default "false" value
import { useState ,useCallback} from 'react';

const useToggle = (initialState = false) => {
    // Initialize the state
    const [state, setState] = useState(initialState);
    
    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState(state => !state), []);
    const close = useCallback(() => setState(false), []);
    
    return [state, toggle]
}

export default useToggle;
 // Call the hook which returns, current value and the toggler function
//  const [isTextChanged, setIsTextChanged] = useToggle();