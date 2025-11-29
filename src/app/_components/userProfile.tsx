import Image from 'next/image';

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    gamesRegistered: number;
    avatarUrl: string;
  };
}

// Dados fictícios para teste
const mockUser = {
  name: "Carlos Oliveira",
  email: "carlos.oliveira@exemplo.com",
  gamesRegistered: 8,
  avatarUrl: "/images/avatar.jpeg"
};

export default function UserProfile({ user }: UserProfileProps) {
  const userData = user || mockUser;

  return (
    <section className="bg-[#1C293A] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden border-4 border-white">
              <Image
                src={userData.avatarUrl}
                alt={`Foto de ${userData.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#66C0F4] mb-4">
              {userData.name}
            </h1>

            <div className="space-y-3 text-white">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <span className="font-semibold text-gray-300">Email:</span>
                <span className="text-sm sm:text-base break-all">{userData.email}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <span className="font-semibold text-gray-300">Jogos Registrados:</span>
                <span className="text-sm sm:text-base">{userData.gamesRegistered}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}