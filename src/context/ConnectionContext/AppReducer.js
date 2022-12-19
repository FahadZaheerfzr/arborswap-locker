export default function SidebarReducer(state, action) {
  switch (action.type) {
    case 'connect':
      return {
        connected: true,
      }
    case 'disconnect':
      return {
        connected: false,
      }
    default:
      return state
  }
}
