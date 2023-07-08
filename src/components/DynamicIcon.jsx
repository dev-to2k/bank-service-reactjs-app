import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ArticleIcon from '@mui/icons-material/Article'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import GavelIcon from '@mui/icons-material/Gavel'
import GradeIcon from '@mui/icons-material/Grade'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import HomeIcon from '@mui/icons-material/Home'
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PaidIcon from '@mui/icons-material/Paid'
import PaymentIcon from '@mui/icons-material/Payment'
import SavingsIcon from '@mui/icons-material/Savings'
import SettingsIcon from '@mui/icons-material/Settings';

const iconComponents = {
  LocationOnIcon,
  CurrencyExchangeIcon,
  GavelIcon,
  HelpCenterIcon,
  PaidIcon,
  AccountBalanceIcon,
  PaymentIcon,
  LocalConvenienceStoreIcon,
  SavingsIcon,
  LocalMallIcon,
  HomeIcon,
  ArticleIcon,
  GradeIcon,
  SettingsIcon
}

const DynamicIcon = ({ iconName, fontSize }) => {
  const IconComponent = iconComponents[iconName]

  return IconComponent ? <IconComponent fontSize={fontSize} /> : null
}

export default DynamicIcon
