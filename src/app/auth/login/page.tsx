import { signInWithEmail } from '@/app/actions/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubContent,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SIGN_UP_URL } from '@/lib/globals';
import { signIn } from '@/server/auth';
import { Label } from '@radix-ui/react-label';
import { AuthError } from 'next-auth';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo: string }>;
}) {
  const awaitedParams = await searchParams;
  return (
    <main className="bg-primary relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        className="absolute z-0 aspect-video h-screen scale-110 opacity-50 blur-[96px] select-none"
        draggable={false}
      >
        <Image
          draggable={false}
          src="/images/auth-background.png"
          alt="Login background"
          fill
          className="object-cover select-none"
        />
      </div>
      <Card className="fade-in-0 zoom-in-90 animate-in z-10 w-full max-w-sm pt-4 duration-300">
        <CardHeader className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Max Integrations"
            width={48}
            height={48}
            className="fade-in-0 zoom-in-95 animate-in mt-4 duration-700"
          />
          <CardTitle className="fade-in-0 slide-in-from-left-2 -zoom-in-95 animate-in mt-4 h-4 duration-700">
            Sign in to Max Integrations
          </CardTitle>
          <CardDescription className="fade-in-0 slide-in-from-left-2 -zoom-in-95 animate-in mb-2 duration-700">
            Welcome back! Please sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 animate-in flex w-full items-center gap-2 duration-500"
            onClick={async () => {
              'use server';
              try {
                await signIn('google', {
                  redirectTo: awaitedParams.redirectTo ?? '/dashboard',
                });
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect(`/auth/error?error=${error.type}`);
                }
                throw error;
              }
            }}
          >
            <Image src="/images/google-logo.png" alt="Google" width={20} height={20} />
            Login with Google
          </Button>
          <div className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 animate-in mt-6 mb-4 flex items-center gap-2 duration-[600]">
            <Separator className="flex-1" />
            <span className="text-muted-foreground text-xs font-light">OR</span>
            <Separator className="flex-1" />
          </div>
          <form
            className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 animate-in flex flex-col gap-4 duration-700"
            action={signInWithEmail}
          >
            <Input
              label="Email address"
              id="email"
              type="email"
              autoComplete="email"
              name="email"
              required
              className=""
            />
            <Button
              type="submit"
              className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 animate-in w-full duration-700"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardSubContent>
          <div className="flex items-center justify-center gap-1">
            Don&apos;t have an account?
            <Button variant="link" asChild className="p-0">
              <Link href={SIGN_UP_URL} className="text-xs font-bold">
                Sign up
              </Link>
            </Button>
          </div>
        </CardSubContent>
      </Card>
    </main>
  );
}
