'use client'

import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

const Avatar = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Root>) => {
  return (
    <Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  )
}

const AvatarImage = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Image>) => {
  return (
    <Image
      alt={props.alt}
      data-slot="avatar-image"
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  )
}

const AvatarFallback = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Fallback>) => {
  return (
    <Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarImage }
