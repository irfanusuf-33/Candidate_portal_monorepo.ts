import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){


// authorization // check payment // check policies // e.g iamUser , ticketingRootAccess 

// fetch user based on login // payment check will be based on tenant id // if tenant has paid it means user is payment verified

// check policies , based on policies modules will conditionaly render 


return (
    children
)


}

