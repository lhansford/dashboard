import { faMapPin, faHeadset, faDollarSign, faRssSquare, faHome } from '@fortawesome/free-solid-svg-icons'

export const APPS = [
  { name: 'Feedly', link: 'https://feedly.com/i/my', icon: faHeadset},
  { name: 'YNAB', link: 'https://app.youneedabudget.com/70ae8da7-d394-43a9-9fba-90f2107e2fcd/budget/201909', icon: faDollarSign},
  { name: 'Monica', link: 'https://app.monicahq.com/dashboard', icon: faHeadset},
  { name: 'Pinboard', link: 'https://pinboard.in/u:lhansford/', icon: faMapPin},
  { name: 'Blog', link: 'http://lukehansford.me/', icon: faHome},
] as const;
