import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Save } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { toast } from 'sonner@2.0.3';

export function AboutManager() {
  const { aboutData, updateAboutData } = useAdmin();
  const [formData, setFormData] = useState({
    name: aboutData.name,
    age: aboutData.age,
    paragraph1: aboutData.description[0] || '',
    paragraph2: aboutData.description[1] || '',
    paragraph3: aboutData.description[2] || '',
    statsAge: aboutData.stats.age,
    statsProjects: aboutData.stats.projects,
    statsApis: aboutData.stats.apis,
    statsUptime: aboutData.stats.uptime
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData = {
      name: formData.name,
      age: formData.age,
      description: [
        formData.paragraph1,
        formData.paragraph2,
        formData.paragraph3
      ].filter(p => p.trim() !== ''),
      stats: {
        age: formData.statsAge,
        projects: formData.statsProjects,
        apis: formData.statsApis,
        uptime: formData.statsUptime
      }
    };

    updateAboutData(updatedData);
    toast.success('Информация обновлена!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Редактирование раздела "О себе"</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Обновите информацию о себе и статистику
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle>Личная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Возраст</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="paragraph1">Первый абзац</Label>
              <Textarea
                id="paragraph1"
                value={formData.paragraph1}
                onChange={(e) => setFormData({ ...formData, paragraph1: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paragraph2">Второй абзац</Label>
              <Textarea
                id="paragraph2"
                value={formData.paragraph2}
                onChange={(e) => setFormData({ ...formData, paragraph2: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paragraph3">Третий абзац</Label>
              <Textarea
                id="paragraph3"
                value={formData.paragraph3}
                onChange={(e) => setFormData({ ...formData, paragraph3: e.target.value })}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Статистика</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="statsAge">Возраст (статистика)</Label>
                <Input
                  id="statsAge"
                  type="number"
                  value={formData.statsAge}
                  onChange={(e) => setFormData({ ...formData, statsAge: parseInt(e.target.value) })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="statsProjects">Количество проектов</Label>
                <Input
                  id="statsProjects"
                  value={formData.statsProjects}
                  onChange={(e) => setFormData({ ...formData, statsProjects: e.target.value })}
                  placeholder="30+"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="statsApis">API endpoints</Label>
                <Input
                  id="statsApis"
                  value={formData.statsApis}
                  onChange={(e) => setFormData({ ...formData, statsApis: e.target.value })}
                  placeholder="20+"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="statsUptime">Uptime</Label>
                <Input
                  id="statsUptime"
                  value={formData.statsUptime}
                  onChange={(e) => setFormData({ ...formData, statsUptime: e.target.value })}
                  placeholder="99.9%"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Save className="w-4 h-4 mr-2" />
          Сохранить изменения
        </Button>
      </form>
    </div>
  );
}
