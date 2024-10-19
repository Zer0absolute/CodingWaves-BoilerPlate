import { SiteConfig } from '@/lib/site-config';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '../ui/Typography';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer className="w-full border-t border-border">
      <div className="m-auto w-full max-w-3xl px-2 py-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-row items-center gap-2">
            <Image
              // TODO METTRE LE LOGO
              src="/images/logo.svg"
              width={40}
              height={30}
              alt={`logo ${SiteConfig.title}`}
            />
            <Typography className='text-primary' variant="base" as={Link} href="/">
              {SiteConfig.title}
            </Typography>
          </div>
          <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
            <Link className="hover:underline" href="/legal/privacy">
              {t("linkPrivacy")}
            </Link>
            <Link className="hover:underline" href="/legal/cgv">
              CGV
            </Link>
            <Link className="hover:underline" href="/admin">
              Admin
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SiteConfig.title}
          </Typography>
        </div>
      </div>
    </footer>
  );
};