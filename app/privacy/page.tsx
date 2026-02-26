import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 - 도란도란',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-lg mx-auto pt-8 pb-12">
      <h1 className="text-xl font-bold mb-6">개인정보처리방침</h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.85 }}>
        <section>
          <h2 className="font-bold mb-2">1. 수집하는 개인정보</h2>
          <p>
            도란도란(이하 &quot;서비스&quot;)은 이용자의 개인정보를 최소한으로 수집합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>소셜 로그인 시: 이름, 이메일, 프로필 이미지 (로그인 제공자가 전달하는 정보)</li>
            <li>테스트 참여 시: 테스트 응답 데이터, 결과 유형</li>
            <li>방 참여 시: 닉네임, 테스트 결과</li>
            <li>자동 수집: 쿠키, 접속 로그, 브라우저 정보</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-2">2. 개인정보의 이용 목적</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>테스트 결과 제공 및 통계 분석</li>
            <li>그룹(방) 기능 제공</li>
            <li>서비스 개선 및 이용 통계 수집</li>
            <li>광고 게재 및 맞춤형 광고 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-2">3. 제3자 제공 및 광고</h2>
          <p>
            본 서비스는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를 사용하여
            이용자의 관심사에 기반한 광고를 표시할 수 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Google의 광고 쿠키 사용에 대한 자세한 내용은{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: 'var(--sky-500)' }}
              >
                Google 광고 정책
              </a>
              을 참고하세요.
            </li>
            <li>
              이용자는{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: 'var(--sky-500)' }}
              >
                Google 광고 설정
              </a>
              에서 맞춤 광고를 비활성화할 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-2">4. 쿠키 사용</h2>
          <p>
            본 서비스는 다음과 같은 목적으로 쿠키를 사용합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>로그인 상태 유지</li>
            <li>사용자 설정 저장 (테마 등)</li>
            <li>테스트 결과 및 최근 활동 기록 (localStorage)</li>
            <li>광고 제공을 위한 Google 쿠키</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-2">5. 개인정보의 보유 및 파기</h2>
          <p>
            이용자의 개인정보는 서비스 이용 기간 동안 보유하며, 회원 탈퇴 또는 수집 목적 달성 시
            지체 없이 파기합니다. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">6. 이용자의 권리</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>개인정보 열람, 수정, 삭제를 요청할 수 있습니다.</li>
            <li>쿠키 설정은 브라우저 설정에서 변경할 수 있습니다.</li>
            <li>맞춤 광고는 Google 광고 설정에서 비활성화할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-2">7. 문의</h2>
          <p>
            개인정보 관련 문의사항이 있으시면 아래 이메일로 연락해 주세요.
          </p>
          <p className="mt-2">
            <a
              href="mailto:leemin.dev@gmail.com"
              className="underline"
              style={{ color: 'var(--sky-500)' }}
            >
              leemin.dev@gmail.com
            </a>
          </p>
        </section>

        <p className="text-xs mt-8" style={{ color: 'var(--muted)' }}>
          시행일: 2026년 2월 26일
        </p>
      </div>
    </div>
  )
}
