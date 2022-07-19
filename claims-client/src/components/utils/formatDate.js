export const formatDate = (date) => {
    const field = date.split('T')
    const correctDate = field[0]
    const arrCorrectDate = correctDate.split('-')
    const formatCorrectDate = arrCorrectDate.reverse()
    return formatCorrectDate.join('/')
}