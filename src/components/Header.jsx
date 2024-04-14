'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {Plus} from 'lucide-react'
import { useEffect } from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
const Header = () => {
    const path = usePathname();
    useEffect(()=>{
        
    },[])
  return (
    <div className='w-5/6 m-auto flex justify-between py-5'>
        <div className='flex  items-center gap-5'>
            <Link href={'/'}><Image src={'/images/logo.svg'} width={150} height={150}></Image></Link>
            <ul className='flex gap-5'>
                <Link href={'/'}>For sell</Link>
                <Link href={'/ForRent'}>For rent</Link>
                <Link href={'/Agent'}>Agent Finder</Link>
            </ul>
        </div>
        <div className='flex gap-2'>
            <Button className='flex gap-2' > <Plus/> Add your post</Button>
            <Button variant='outline' >Login</Button>
        </div>
    </div>
  )
}

export default Header