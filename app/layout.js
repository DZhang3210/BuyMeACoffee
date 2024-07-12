'use server'
import { getServerSession } from "next-auth";
import "./globals.css";
import Header from "@/components/Header";
import { authOptions } from "@/lib/authOptions";


export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <Header session = {session}/>
        {/* {JSON.stringify(session)} */}
        {children}
      </body>
    </html>
  );
}
