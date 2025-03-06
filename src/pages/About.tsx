import { Award, ChartBar, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Mengenal lebih dekat AgriTech Indonesia, mitra utama dalam pengembangan pertanian berkelanjutan di Indonesia.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Tim AgriTech Indonesia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi Kami</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Visi</h3>
                <p className="text-gray-600">
                  Menjadi perusahaan terdepan dalam mengembangkan dan menerapkan teknologi pertanian berkelanjutan yang meningkatkan kesejahteraan petani dan keamanan pangan di Indonesia.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Misi</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Mengembangkan teknologi pertanian yang ramah lingkungan dan berkelanjutan</li>
                  <li>Meningkatkan produktivitas dan kualitas hasil pertanian</li>
                  <li>Memberdayakan petani melalui pelatihan dan pendampingan</li>
                  <li>Membangun ekosistem pertanian yang terintegrasi dari hulu ke hilir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dampak nyata dari kerja keras kami dalam memajukan sektor pertanian Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <p className="text-gray-600">Petani Terlatih</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">Kemitraan</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <ChartBar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">30%</div>
              <p className="text-gray-600">Peningkatan Hasil Panen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesional berpengalaman yang berdedikasi untuk memajukan pertanian Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="CEO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Budi Santoso</h3>
                <p className="text-green-600 mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Berpengalaman lebih dari 15 tahun di bidang agribisnis dan teknologi pertanian.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="CTO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Ratna Dewi</h3>
                <p className="text-green-600 mb-2">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Ahli teknologi pertanian dengan keahlian dalam sistem irigasi dan pemantauan tanaman.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Agricultural Expert" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Ahmad Hidayat</h3>
                <p className="text-green-600 mb-2">Pakar Agronomi</p>
                <p className="text-gray-600 text-sm">
                  Doktor di bidang agronomi dengan fokus pada peningkatan produktivitas tanaman pangan.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Marketing Director" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Maya Kartika</h3>
                <p className="text-green-600 mb-2">Marketing Director</p>
                <p className="text-gray-600 text-sm">
                  Berpengalaman dalam pengembangan strategi pemasaran untuk produk-produk pertanian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
