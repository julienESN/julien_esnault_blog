import { useSession } from "@/web/components/SessionContext"
import Button from "@/web/components/ui/Button"
import Link from "@/web/components/ui/Link"

const MenuItem = ({ children, href, ...otherProps }) => (
  <li {...otherProps}>
    <Link styless href={href}>
      {children}
    </Link>
  </li>
)
const Header = () => {
  const { session, signOut } = useSession()

  return (
    <header className="border-b-2 bg-slate-100">
      <div className="flex md:max-w-3xl mx-auto p-4">
        <div className="text-2xl">
          <Link href="/" styless>
            Blog Logo
          </Link>
        </div>
        <nav className="ms-auto">
          <ul className="flex h-full gap-4 items-center">
            {session ? (
              <>
                <MenuItem href="/posts">My Posts/ Dashboard</MenuItem>
                <MenuItem href="/edit-profile">Edit Profile</MenuItem>
                <MenuItem href="/posts/create">Create Post</MenuItem>

                {session && session.role === "admin" && (
                  <>
                    <MenuItem href="/admin/users">Admin Panel Users</MenuItem>
                  </>
                )}

                <li>
                  <Button
                    variant="transparent"
                    size="inherit"
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                </li>
              </>
            ) : (
              <>
                <MenuItem href="/sign-up">Sign Up</MenuItem>
                <MenuItem href="/sign-in">Sign In</MenuItem>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
