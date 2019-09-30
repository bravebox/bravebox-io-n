import React from "react"

const defaultState = {
  open: false,
  toggleOpen: () => {},
  scenes: 5,
  setScenes: () => {},
}

const SiteContext = React.createContext(defaultState);

class SiteProvider extends React.Component {
  state = {
    open: false,
    scenes: 5,
  }

  toggleOpen = () => {
    let open = !this.state.open;
    localStorage.setItem("open", JSON.stringify(open));
    this.setState({ open });
  }

  setScenes = () => {
    console.log('scenes', this.state.scenes);
  }

  componentDidMount() {
    // Getting open mode value from localStorage!
    const lsOpen = JSON.parse(localStorage.getItem("open"));
    if (lsOpen) {
      this.setState({ open: lsOpen });
    }
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;
    const { scenes } = this.state;
    return (
      <SiteContext.Provider
        value={{
          open,
          toggleOpen: this.toggleOpen,
          scenes,
        }}
      >
        {children}
      </SiteContext.Provider>
    )
  }
}

export default SiteContext

export { SiteProvider }