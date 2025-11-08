import { useAdmin } from "../../contexts/AdminContext";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const { skillCategories } = useAdmin();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-gray-900 dark:text-white">Навыки</h2>
            <motion.div
              className="w-12 h-0.5 bg-gray-900 dark:bg-white"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + skillIdx * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gray-900 dark:bg-white rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: idx * 0.2 + skillIdx * 0.1 + 0.3, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
