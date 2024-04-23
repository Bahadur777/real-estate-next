'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {Plus} from 'lucide-react'
import { useEffect } from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
const Header = () => {
    const path = usePathname();
    const {user, isSignedIn}= useUser();
    useEffect(()=>{
        
    },[])
  return (
    <div className='w-5/6 m-auto flex justify-between py-5'>
        <div className='flex  items-center gap-5'>
            <Link href={'/'}><Image src={'/images/logo.svg'} width={150} height={150} alt='logo'></Image></Link>
            <ul className='flex gap-5'>
                <Link href={'/ForSell'} className='hover:text-red-500 hover:font-bold'>For sell</Link>
                <Link href={'/Rent'} className='hover:text-red-500 hover:font-bold'>For rent</Link>
                <Link href={'/Agent'} className='hover:text-red-500 hover:font-bold }'>Agent Finder</Link>
            </ul>
        </div>
        <div className='flex gap-2'>
            <Button className='flex gap-2' > <Plus/> Add your post</Button>
            {isSignedIn ? <UserButton/>: <Button variant='outline' >Login</Button>}
            
        </div>
    </div>
  )
}

export default Header