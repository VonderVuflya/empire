'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as UI from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description?: string }[] = [
  {
    title: 'Эпизод I',
    href: '/episode/1',
    description: 'Рассвет, надежды и успехи. Империя без автомобилей.',
  },
  {
    title: 'Эпизод II',
    href: '/episode/2',
    description: 'А была ли Империя? Империя без автомобилей.',
  },
  {
    title: 'Эпизод III',
    href: '/episode/3',
    description: 'Бездна. Как мы все потеряли. Империя без автомобилей.',
  },
  {
    title: 'Эпизод IV',
    href: '/episode/4',
    description: 'Ленин. Идея и месть. Империя без автомобилей.',
  },
]

export function NavigationMenu() {
  return (
    <UI.NavigationMenu>
      <UI.NavigationMenuList>
        <UI.NavigationMenuItem>
          <UI.NavigationMenuTrigger>Эпизоды</UI.NavigationMenuTrigger>
          <UI.NavigationMenuContent>
            <ul className='flex flex-col gap-2 p-4 w-[500px] '>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </UI.NavigationMenuContent>
        </UI.NavigationMenuItem>
        <UI.NavigationMenuItem>
          <UI.NavigationMenuLink asChild>
            <a
              className={cn(
                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
              )}
              href='/about'
            >
              <p className='line-clamp-2 text-sm leading-snug'>Что это за сайт?</p>
            </a>
          </UI.NavigationMenuLink>
        </UI.NavigationMenuItem>
      </UI.NavigationMenuList>
    </UI.NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <UI.NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </UI.NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
