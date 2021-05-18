/**
 * Update firstname action
 */

export const updateUserInformation = (firstName, lastName, department, jobTitle,location) => ({
    type: 'UPDATE_USER_INFORMATION',
    value: {
        firstName: firstName,
        lastName: lastName,
        department: department,
        job_title: jobTitle,
        location: location
    }
})

