import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, onTabClick} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onTabClick(tabId)
  }

  const activeTabClass = isActive ? 'active_tab' : ''

  return (
    <li className="tab">
      <button
        className={`btn ${activeTabClass}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
