import {
    CogIcon,
    CollectionIcon,
    HomeIcon,
    PhotographIcon,
    UserGroupIcon,
    ViewGridIcon as ViewGridIconOutline,
} from '@heroicons/react/outline'


export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'All Files', href: '#', icon: ViewGridIconOutline, current: false },
    { name: 'Photos', href: '#', icon: PhotographIcon, current: true },
    { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Albums', href: '#', icon: CollectionIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
]