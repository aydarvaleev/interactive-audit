import { BookOpen, FileText, Scale, Shield, UserCheck, Copyright, AlertTriangle, FileCheck } from 'lucide-react';

export function ReferenceGuide() {
  return (
    <aside className="print:hidden">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 sticky top-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900">Методичка для юридического аудита</h3>
        </div>
        
        <p className="text-xs text-gray-600 mb-3">
          Методичка для юридического аудита сайта онлайн-школы
        </p>
        
        <div className="bg-white rounded-lg p-3 mb-4 border-l-4 border-blue-500">
          <p className="text-xs font-medium text-gray-900 mb-1">Автор методички:</p>
          <p className="text-sm font-semibold text-blue-800">Зарина Эргашева</p>
          <p className="text-xs text-gray-600 mt-0.5">Кандидат юридических наук</p>
          <p className="text-xs text-gray-600">Юрист для онлайн-бизнеса</p>
        </div>
        
        <div className="space-y-4 text-sm">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">1. Паспорт проекта</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Наименование проекта</li>
              <li>Форма организации (ИП/ООО/самозанятый)</li>
              <li>ОГРН/ИНН</li>
              <li>Регион работы</li>
              <li>Описание бизнес-модели</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">2. Лицензирование</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 91 Закона «Об образовании в РФ»</p>
            <p className="text-xs text-gray-700 font-medium mb-1">Проверяем:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc mb-2">
              <li>Кто оказывает услуги (формулировки на сайте)</li>
              <li>Наличие других педагогических работников</li>
              <li>Реализация образовательной программы</li>
              <li>Информация о лицензии (если требуется)</li>
            </ul>
            <p className="text-xs text-gray-700 font-medium mb-1">Квалификация:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-none">
              <li>☐ Лицензия не требуется</li>
              <li>☐ Лицензия требуется</li>
              <li>☐ Высокий риск</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">3. Публичная оферта</h4>
            </div>
            <p className="text-xs text-gray-700 font-medium mb-1">Проверяем:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Соответствие модели бизнеса</li>
              <li>Порядок возврата денежных средств</li>
              <li>Отсутствие незаконных удержаний</li>
              <li>Отсутствие гарантий результата</li>
              <li>Указание сроков доступа к материалам</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">4. Реклама</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 5 Закона о рекламе</p>
            <p className="text-xs text-gray-700 font-medium mb-1">Проверяем:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Обещания дохода без оговорок</li>
              <li>Гарантии результата</li>
              <li>Кейсы учеников с обязательными оговорками</li>
              <li>Согласие клиентов на использование отзывов</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">5. Персональные данные</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 9 ФЗ-152 «О персональных данных»</p>
            <p className="text-xs text-gray-700 font-medium mb-1">Проверяем:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Наличие политики обработки ПД</li>
              <li>Согласие на обработку ПД</li>
              <li>Отдельное согласие на маркетинговые рассылки</li>
              <li>Отсутствие предустановленных чекбоксов</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Copyright className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">6. Интеллектуальная собственность</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 1225-1259 ГК РФ</p>
            <p className="text-xs text-gray-700 font-medium mb-1">Проверяем:</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Права на курсы и методические материалы</li>
              <li>Договоры с преподавателями (отчуждение прав)</li>
              <li>Исключительные права на контент</li>
              <li>Проверка товарных знаков</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">7. Таблица рисков</h4>
            </div>
            <div className="text-xs text-gray-600">
              <div className="grid grid-cols-5 gap-1 font-medium mb-1">
                <div>Риск</div>
                <div>Норма закона</div>
                <div>Уровень</div>
                <div>Последствия</div>
                <div>Рекомендации</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900">8. Заключение</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Краткие итоги аудита</li>
              <li>Приоритетные задачи</li>
              <li>Рекомендации по устранению рисков</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="bg-blue-100 rounded-lg p-3">
            <p className="text-xs text-blue-900 font-medium mb-1">💡 Совет</p>
            <p className="text-xs text-blue-700">
              Заполняйте разделы последовательно. Все данные автоматически сохраняются в браузере.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}