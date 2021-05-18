
const initialState = {
        firstName: null,
        lastName: null,
        department: null,
        job_title: null,
        location: null,
        employees: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER_INFORMATION':
            return {
                ...state,
                ...action.value
            }
        default:
            return state
    }
}
