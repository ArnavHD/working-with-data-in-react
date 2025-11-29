/**
 * 1.e.target.[name of input field].value
 * 2. use form action and form data in the action handler. formData.get('name of the input field');
 * 3.. controlled component. one state per eac field. use state on change on the field. useful to dynamically handle error.
 * 3.. এভাবেও লেখা যায়। সব handle করতে। 
 * handle all controlled field in one state object
 * const [formData, setFormData] = useState({
 *  name: '',
 *  password: '',
 * phone: '',
 * })
 * 
 * 4. Uncontrolled using useref.
*/