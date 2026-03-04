import { Plus, Trash2 } from 'lucide-react';
import { FormData } from '../App';

interface RiskTableSectionProps {
  risks: FormData['risks'];
  onChange: (risks: FormData['risks']) => void;
}

export function RiskTableSection({ risks, onChange }: RiskTableSectionProps) {
  const addRisk = () => {
    onChange([
      ...risks,
      {
        risk: '',
        norm: '',
        level: '',
        consequences: '',
        recommendation: '',
      },
    ]);
  };

  const removeRisk = (index: number) => {
    onChange(risks.filter((_, i) => i !== index));
  };

  const updateRisk = (index: number, field: keyof FormData['risks'][0], value: string) => {
    const updated = [...risks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        7. Итоговая таблица рисков
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">
                Риск
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">
                Норма
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">
                Уровень риска
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">
                Последствия
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">
                Рекомендация
              </th>
              <th className="border border-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-700 print:hidden">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {risks.length === 0 ? (
              <tr>
                <td colSpan={6} className="border border-gray-300 px-3 py-8 text-center text-gray-500 text-sm">
                  Нажмите кнопку "Добавить риск" для добавления записей
                </td>
              </tr>
            ) : (
              risks.map((risk, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="text"
                      value={risk.risk}
                      onChange={(e) => updateRisk(index, 'risk', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="Описание риска"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="text"
                      value={risk.norm}
                      onChange={(e) => updateRisk(index, 'norm', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="Норма закона"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <select
                      value={risk.level}
                      onChange={(e) => updateRisk(index, 'level', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                    >
                      <option value="">Выберите</option>
                      <option value="low">Низкий</option>
                      <option value="medium">Средний</option>
                      <option value="high">Высокий</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="text"
                      value={risk.consequences}
                      onChange={(e) => updateRisk(index, 'consequences', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="Последствия"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="text"
                      value={risk.recommendation}
                      onChange={(e) => updateRisk(index, 'recommendation', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="Рекомендация"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center print:hidden">
                    <button
                      onClick={() => removeRisk(index)}
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Удалить риск"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <button
        onClick={addRisk}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors print:hidden"
      >
        <Plus className="w-4 h-4" />
        Добавить риск
      </button>
    </section>
  );
}
