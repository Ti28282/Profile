import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Mail, Trash2, Check } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { toast } from 'sonner@2.0.3';

export function MessagesManager() {
  const { messages, markMessageAsRead, deleteMessage } = useAdmin();
  const unreadCount = messages.filter(m => !m.read).length;

  const handleMarkAsRead = (id: number) => {
    markMessageAsRead(id);
    toast.success('Сообщение отмечено как прочитанное');
  };

  const handleDelete = (id: number) => {
    if (confirm('Вы уверены, что хотите удалить это сообщение?')) {
      deleteMessage(id);
      toast.success('Сообщение удалено');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Сообщения</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Всего сообщений: {messages.length} • Непрочитанных: {unreadCount}
          </p>
        </div>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Сообщений пока нет
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`${
                message.read
                  ? 'bg-white dark:bg-gray-900'
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-gray-900 dark:text-white">
                        {message.name}
                      </h3>
                      {!message.read && (
                        <Badge className="bg-blue-500 hover:bg-blue-600">
                          Новое
                        </Badge>
                      )}
                    </div>
                    <a
                      href={`mailto:${message.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {message.email}
                    </a>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                    {new Date(message.date).toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-wrap">
                  {message.message}
                </p>

                <div className="flex gap-2">
                  {!message.read && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleMarkAsRead(message.id)}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Отметить прочитанным
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                    onClick={() => handleDelete(message.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Удалить
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a href={`mailto:${message.email}?subject=Re: Сообщение из портфолио`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Ответить
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
