/**
 * components/sections
 * project/ProjectCardModal.tsx
**/

import styles from './project.module.scss';
import clsx from 'clsx';
import { ProjectItem } from 'data/projectData';
import { ProjectDetail } from 'data/projectDetailData';

interface ProjectCardModalProps {
  item: ProjectItem;
  detail?: ProjectDetail;
}

function ProjectCardModal({ item, detail }: ProjectCardModalProps) {
  return (
    <div className={clsx(
      styles.modalDetail,
      styles[`type_${item.id}`]
    )}>
      {/* 기본정보 */}
      <div className={styles.modalInfo}>
        {/* <div className={styles.infoThumb}>
          <img src={item.imgSrc} alt="" />
        </div> */}
        <h4 className={styles.infoTitle}>{item.title}</h4>
        <p className={styles.infoPosition}>{item.position}</p>
        <dl>
          <dt>작업 기간</dt>
          <dd>{item.period}</dd>
        </dl>
        <dl>
          <dt>사용 언어</dt>
          <dd>{item.skill}</dd>
        </dl>
        {detail?.link && (
          <a
            href={detail.link}
            className={styles.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="사이트 바로가기"
          ><i className={styles.btnLinkIcon}></i>바로가기</a>
        )}
      </div>

      {/* 보안문구 */
        detail?.security && (
          <p className={styles.textSecurity}>
            <i className={styles.icon}></i>
            본 프로젝트는 보안상 코드와 화면을 상세히 공개할 수 없어, <strong>프로젝트 구조 흐름과 회고 중심으로 구성했습니다.</strong>
          </p>
        )
      }

      <div className={styles.modalContent}>
        {/* 이슈사항 */}
        {detail?.problem && detail.problem.length > 0 && (
          <section className={styles.modalSection}>
            <h5 className={styles.modalSubTitle}>실무에서 겪은 문제</h5>
            <ul className={styles.modalList}>
              {detail.problem?.map((text, idx) => (
                <li key={`problem-${idx}`}>{text}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 개선 */}
        {detail?.solution && detail.solution.length > 0 && (
          <section className={styles.modalSection}>
            <h5 className={styles.modalSubTitle}>내가 했던 개선</h5>
            <ul className={styles.modalList}>
              {detail.solution.map((text, idx) => (
                <li key={`solution-${idx}`}>{text}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 회고 */}
        {detail?.reflection && detail.reflection.length > 0 && (
          <section className={styles.modalSection}>
            <h5 className={styles.modalSubTitle}>회고</h5>
            <ul className={styles.modalList}>
              {detail.reflection.map((text, idx) => (
                <li key={`reflection-${idx}`}>{text}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProjectCardModal;