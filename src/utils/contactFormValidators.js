// only receives refs 
export function hasEmptyFields(name, number){
    if (name.current.value.trim().length === 0 ||
      number.current.value.trim().length === 0){
        return true
    }else{
        return false
    }
}