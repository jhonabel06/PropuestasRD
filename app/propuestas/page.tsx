'use client';

import { useState, useEffect } from 'react';
import { ProposalCard } from '@/components/proposal-card';
import { FilterSidebar } from '@/components/filter-sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Search } from 'lucide-react';

interface Propuesta {
  id: string;
  partido: string;
  partidoColor: string;
  titulo: string;
  resumen: string;
  tema: string;
  fecha: string;
  autor: string;
  fuenteOficial: string;
  descripcion: string;
}

export default function PropuestasPage() {
  const [propuestas, setPropuestas] = useState<Propuesta[]>([]);
  const [filteredPropuestas, setFilteredPropuestas] = useState<Propuesta[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartido, setSelectedPartido] = useState('');
  const [selectedTema, setSelectedTema] = useState('');

  // Cargar propuestas
  useEffect(() => {
    async function fetchPropuestas() {
      try {
        const response = await fetch('/api/propuestas');
        if (response.ok) {
          const data = await response.json();
          setPropuestas(data);
          setFilteredPropuestas(data);
        }
      } catch (error) {
        console.error('Error cargando propuestas:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPropuestas();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let result = [...propuestas];

    // Filtro por partido
    if (selectedPartido) {
      result = result.filter(p => p.partido === selectedPartido);
    }

    // Filtro por tema
    if (selectedTema) {
      result = result.filter(p => p.tema === selectedTema);
    }

    // Búsqueda por texto
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.titulo.toLowerCase().includes(query) ||
        p.resumen.toLowerCase().includes(query) ||
        p.autor.toLowerCase().includes(query)
      );
    }

    setFilteredPropuestas(result);
  }, [searchQuery, selectedPartido, selectedTema, propuestas]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedPartido('');
    setSelectedTema('');
  };

  const hasActiveFilters = searchQuery || selectedPartido || selectedTema;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Propuestas Políticas
          </h1>
          <p className="text-gray-600">
            Explora las propuestas de los partidos políticos de República Dominicana
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de filtros */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4">
              <FilterSidebar
                selectedPartido={selectedPartido}
                onPartidoChange={setSelectedPartido}
                selectedTema={selectedTema}
                onTemaChange={setSelectedTema}
              />
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="lg:col-span-3">
            {/* Barra de búsqueda */}
            <div className="bg-white rounded-lg border p-4 mb-6">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Buscar por título, descripción o autor..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                  >
                    Limpiar filtros
                  </Button>
                )}
              </div>
            </div>

            {/* Contador de resultados */}
            {!loading && (
              <div className="mb-4 text-sm text-gray-600">
                {filteredPropuestas.length === 0 ? (
                  <span>No se encontraron propuestas</span>
                ) : (
                  <span>
                    Mostrando {filteredPropuestas.length} {filteredPropuestas.length === 1 ? 'propuesta' : 'propuestas'}
                    {hasActiveFilters && ` de ${propuestas.length} totales`}
                  </span>
                )}
              </div>
            )}

            {/* Lista de propuestas */}
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-lg border p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : filteredPropuestas.length === 0 ? (
              <div className="bg-white rounded-lg border p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No se encontraron propuestas
                </h3>
                <p className="text-gray-600 mb-4">
                  Intenta ajustar los filtros o la búsqueda
                </p>
                {hasActiveFilters && (
                  <Button onClick={handleClearFilters}>
                    Limpiar filtros
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPropuestas.map((propuesta) => (
                  <ProposalCard key={propuesta.id} {...propuesta} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
