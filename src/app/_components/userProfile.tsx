import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    image: string;
  };
  gamesRegistered?: number;
}

export default function UserProfile({ user: propUser, gamesRegistered = 0 }: UserProfileProps) {
  const { data: session } = useSession();
  const userData = session?.user

  const avatarUrl = userData?.image || "/images/avatar-default.webp";
  
  return (
    <section className="bg-[#1C293A] py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden border-4 border-white">
              <Image
                src={avatarUrl}
                alt={`Foto de ${userData?.name || 'Usuário'}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
                onError={(e) => {
                  e.currentTarget.src = "/images/avatar-default.png";
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#66C0F4] mb-4">
              {userData?.name || "Usuário"}
            </h1>

            <div className="space-y-3 text-white">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <span className="font-semibold text-gray-300">Email:</span>
                <span className="text-sm sm:text-base break-all">
                  {userData?.email || "Não disponível"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <span className="font-semibold text-gray-300">Jogos Registrados:</span>
                <span className="text-sm sm:text-base">{gamesRegistered}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}